export interface Khoa {

  maKhoa?:number;
  tenKhoa?:string
}

export interface MonHoc {
  maMonHoc?:number;
  tenMonHoc?:string;
  soTinChi:string
}

export interface SinhVien
{
  maSv:number;
  maLop:number;
  tenLop:string;
  hoVaTen:string;
  ngaySinh:string;
  soDienThoai:string;
  diaChi:string;
  email:string;
  gioTinh:string;
  cmnd:string
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
  tenHeDaoTao:string;
}
 export interface Lop
{
  maLop:number;
  tenLop:string;
  maHeDaoTao:number;
  maKhoa:number;
  maHocKy:number;

}

export interface HocKy
{
  maHocKy:string;
  tenHocKy:string;
  namHoc:string;
  heSoHk:string
}
export interface Diem
{
  maDiem:number;
       tenKhoa: string;
       tenHocKy:string;
       tenHeDaoTao: string;
       maSv: number;
       hoVaTen:string;
       tenMonHoc:string;
       tenLop:string;
       diemChuyenCan:number;
       diemKetThuc:number;
       diemThucHanh:number;
       diemTongKet:number
}

export interface MonHocTruot
{
  tenLop:string;
  maSv:number;
  hoVaTen:string;
  diemKetThuc:number;
  maMonHoc:number,
  tenKhoa:string
}
export interface DkHocLai
{

  maSv:number;
  hoVaTen:string;
  tenMonHoc:string;
  soTinChi:number;
  diemKetThuc:number;
  trangThaiHocLai:number;
  trangThaiNopTien:number;
}

export interface TraCuuMon
{
  maSv:number;
  hoVaTen:string;
  tenLop:string;
  diemKetThuc:number;

}
