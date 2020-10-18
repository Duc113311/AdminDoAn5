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

export interface BoMon
{
  maBoMon:string;
  tenBoMon:string;
  maKhoa:string

}
export interface HeDaoTao
{
  maHeDaoTao:string;
  tenHeDaoTao:string
}
 export interface Lop
{
  maLop:string;
  tenLop:string;
  maHeDaoTao:string;
  maKhoa:string;
  maGiaoVien:string;
  maHocKy:string;

}

export interface HocKy
{
  maHocKy:string;
  tenHocKy:string;
  namHoc:string;
  heSoHk:string
}

