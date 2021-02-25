
import { Component } from '@angular/core';
import { TableRow, TableView } from 'src/app/modules/shared/models/content';
import trackByIdentity from 'src/app/util/trackBy/trackByIdentity';
import trackByIndex from 'src/app/util/trackBy/trackByIndex';
import { ViewService } from '../../../services/view/view.service';
import { AbstractViewComponent } from '../../abstract-view/abstract-view.component';

@Component({
  selector: 'app-view-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent extends AbstractViewComponent<TableView> {
  columns: string[];
  rows: TableRow[];
  title: string;
  placeholder: string;
  badgeData: any[] = [
    {
      name: "Total Resources",
      percentage: '45',
      bgcolor: "#00004DD9",
      resourcecolor: '#00004D'
    },
    {
      name: "Namespaces",
      percentage: '25',
      bgcolor: "#002366D9",
      resourcecolor: '#002366'
    },
    {
      name: "Ingresses",
      percentage: '0',
      bgcolor: "#192BC2D9",
      resourcecolor: '#192BC2'
    },
    {
      name: "Persistent Volumes",
      percentage: '0',
      bgcolor: "#0047ABD9",
      resourcecolor: '#0047AB'
    },
    {
      name: "Deployments",
      percentage: '9',
      bgcolor: "#1C63BCD9",
      resourcecolor: '#2A65AF'
    },
    {
      name: "Stateful Set",
      percentage: '1',
      bgcolor: "#3B7CFF",
      resourcecolor: '#1B5AD9'
    },
    {
      name: "Jobs",
      percentage: '0',
      bgcolor: "#4F88FCD9",
      resourcecolor: '#3B79F8'
    },
    {
      name: "Daemon Set",
      percentage: '1',
      bgcolor: "#26619CD9",
      resourcecolor: '#26619C'
    },
    {
      name: "Services",
      percentage: '13',
      bgcolor: "#3A7CA5D9",
      resourcecolor: '#427194'
    }
  ];
  reserevedBadgeData: any[] = [
    {
      name: "Pods Reserved",
      percentage: '60',
      description: '66 of 110 Pods Reserved'
    },
    {
      name: "Cores Reserved",
      percentage: '45',
      description: '1.65 of 4 Cores Reserved'
    },
    {
      name: "Memory Reserved",
      percentage: '19',
      description: '2.96 of 15.6 GiB Memory Reserved'
    },
  ]
  trackByIdentity = trackByIdentity;
  trackByIndex = trackByIndex;

  constructor(private viewService: ViewService) {
    super();
  }

  update() {
    const current = this.v;
    this.title = this.viewService.viewTitleAsText(current);
    this.columns = current.config.columns.map(column => column.name);
    this.rows = current.config.rows;
    this.placeholder = current.config.emptyContent;
  }
}
