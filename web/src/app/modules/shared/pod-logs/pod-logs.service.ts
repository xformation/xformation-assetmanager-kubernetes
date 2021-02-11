// Copyright (c) 2019 the Octant contributors. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
//

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LogEntry } from 'src/app/modules/shared/models/content';
import getAPIBase from '../services/common/getAPIBase';
import { WebsocketService } from '../../../data/services/websocket/websocket.service';

const API_BASE = getAPIBase();

export class PodLogsStreamer {
  public logEntry: BehaviorSubject<LogEntry>;

  constructor(
    private namespace: string,
    private pod: string,
    private container: string,
    private since: number,
    private wss: WebsocketService
  ) {}

  public start(): void {
    const emptyEntry = {
      timestamp: null,
      message: null,
      container: null,
      sinceSeconds: null,
    } as LogEntry;

    this.logEntry = new BehaviorSubject(emptyEntry);

    this.wss.sendMessage('action.octant.dev/podLogs/subscribe', {
      namespace: this.namespace,
      podName: this.pod,
      containerName: this.container,
      sinceSeconds: this.since,
    });

    this.wss.registerHandler(this.streamUrl(), data => {
      const update = data as LogEntry;
      update.message = update.message.replace(/\t/, '&nbsp;'.repeat(4));
      this.logEntry.next(update);
    });
  }

  public close(): void {
    this.wss.sendMessage('action.octant.dev/podLogs/unsubscribe', {
      namespace: this.namespace,
      podName: this.pod,
    });
    this.logEntry.unsubscribe();
  }

  private streamUrl(): string {
    return [
      'event.octant.dev',
      'logging',
      `namespace/${this.namespace}`,
      `pod/${this.pod}`,
    ].join('/');
  }
}

@Injectable({
  providedIn: 'root',
})
export class PodLogsService {
  constructor(private wss: WebsocketService) {}

  public createStream(
    namespace,
    pod,
    container: string,
    since?: number
  ): PodLogsStreamer {
    const pls = new PodLogsStreamer(namespace, pod, container, since, this.wss);
    pls.start();
    return pls;
  }
}
