package com.demo.webapp.entity;
import lombok.*;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "sinhvien")
public class Sinhvien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long masv;
    @Column(name = "hodem")
    private String hoDem;
    @Column(name = "ten")
    private String ten;
    @Column(name = "ngaysinh")
    private Date ngaySinh;
    @Column(name = "gioitinh")
    private String gioiTinh;
    @Column(name = "tinh")
    private  String tinh;

    @ToString.Include
    String sv(){
        return "Sinh vien";
    }

}
