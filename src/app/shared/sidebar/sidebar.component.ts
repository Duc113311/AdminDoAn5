import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menus=[
  {
    name:'Học Lại',url:'',childs:[
      {name:'Lớp Học Lại',url:'hoc-lai/lop-hoc-lai',icon:'calendar-alt'},
      {name:'Đăng Ký Học Lại',url:'hoc-lai/dkhoc-lai',icon:'image'},
      {name:'Học Lại',url:'',icon:'envelope',childs:[
        {name:'List Học Lại',url:'hoc-lai/hoc-lai',icon:'circle'}
      ]}
    ],
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
