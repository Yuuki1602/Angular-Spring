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
    private String HoDem;
    @Column(name = "ten")
    private String Ten;
    @Column(name = "ngaysinh")
    private Date NgaySinh;
    @Column(name = "gioitinh")
    private String GioiTinh;
    @Column(name = "tinh")
    private  String Tinh;

    @ToString.Include
    String sv(){
        return "Sinh vien";
    }


}
