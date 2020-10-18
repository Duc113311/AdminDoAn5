export interface Khoa {
  name: string;
  id: any;
  maKhoa?:number;
  tenKhoa?:string
}

export interface MonHoc {
  maMonHoc?:string;
  tenMonHoc?:string;
  soTinChi:string
}

export interface SinhVien
{
  maSv:string;
  maLop:string;
  hoVaTen:string;
  ngaySinh:Date;
  sodienthoai:string;
  diaChi:string;
  email:string;
  gioTinh:string;
  cmnd:string;
  maTK:string
}
