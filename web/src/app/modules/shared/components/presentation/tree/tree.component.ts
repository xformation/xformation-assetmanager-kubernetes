import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TreeNode } from './tree-node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() treeData: TreeNode[];
  activeItem = -1;
  ngOnInit() {
  }

  toggleChild(node) {
    node.isOpened = !node.isOpened;
  }

}
