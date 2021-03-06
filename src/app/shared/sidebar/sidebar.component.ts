import { Component, OnInit } from '@angular/core';
// table

//Hết table
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
      {name:'Kết xuất',url:'hoc-lai/ketxuat',icon:'circle'},
      {name:'Học Lại',url:'',icon:'envelope',childs:[
        {name:'List Học Lại',url:'hoc-lai/hoc-lai',icon:'circle'}

      ]}
    ],
  },
  {
    name:'Thông Tin',url:'',childs:[
      {name:'Quản Lý Sinh Viên',url:'',icon:'envelope',childs:[
        {name:'Danh Sách Sinh Viên', url:'thongtin/sinhvien',icon:'circle'}
      ]},
      {name:'Quản Lý Giáo Viên',url:'',icon:'envelope',childs:[
        {name:'Danh Sách Giáo Viên', url:'thongtin/giaovien',icon:'circle'}
      ]},
    ]
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
