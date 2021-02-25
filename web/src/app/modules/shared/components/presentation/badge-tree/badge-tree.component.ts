
import { Component } from '@angular/core';
import { ViewService } from '../../../services/view/view.service';
import { AbstractViewComponent } from '../../abstract-view/abstract-view.component';
import { EditorView } from 'src/app/modules/shared/models/content';

@Component({
  selector: 'app-view-badge-tree',
  templateUrl: './badge-tree.component.html',
  styleUrls: ['./badge-tree.component.scss'],
})
export class BadgeTreeComponent extends AbstractViewComponent<ViewService> {
  badgeTreeData: any[] = [
    {
      title: 'Workloads',
      isOpened: false,
      subData: [
        { title: 'Pods', isOpened: false },
        { title: 'Deployments', isOpened: false },
        { title: 'Stateful Sets', isOpened: false },
        { title: 'Replica Sets', isOpened: false },
        {
          title: 'Daemon Sets',
          isOpened: false,
          subData: [
            { title: 'Jobs', isOpened: false },
            { title: 'Cron Jobs', isOpened: false },
          ]
        },
        { title: 'Replication Controller', isOpened: false }
      ]
    },
    { title: 'Network', isOpened: false },
    { title: 'Configuration', isOpened: false, },
    { title: 'Storage', isOpened: false },
    { title: 'External Storage', isOpened: false },
    { title: 'Custome Resources', isOpened: false }
  ];
  expandYML: boolean = false;
  editorView: EditorView = {
    config: {
      value: '',
      language: 'yaml',
      readOnly: false,
      metadata: null,
      submitAction: 'action.octant.dev/apply',
      submitLabel: 'Apply',
    },
    metadata: {
      type: 'editor',
      title: [],
    },
  };
  constructor(private viewService: ViewService) {
    super();
  }
  update() {
  }

  toggleYML() {
    this.expandYML = !this.expandYML;
  }
}
