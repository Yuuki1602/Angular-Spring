package com.demo.webapp.controller;

import com.demo.webapp.entity.Sinhvien;
import com.demo.webapp.repository.SinhvienRepository;
import com.demo.webapp.service.SinhvienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/students")
public class SinhvienController {
    private final SinhvienService svs;
    private final SinhvienRepository svrepo;
    @Autowired
    public SinhvienController(SinhvienService svs, SinhvienRepository svrepo) {
        this.svs = svs;
        this.svrepo = svrepo;
    }

    @GetMapping
    public ResponseEntity<List<Sinhvien>> getAllStudents(){
        List<Sinhvien> sinhviens =svs.listAllStudent();
        return new ResponseEntity<>(sinhviens, HttpStatus.OK);
    }

    @GetMapping("/{masv}")
    public ResponseEntity<Sinhvien> getStudentsById(@PathVariable("masv") Long masv){
        Sinhvien newsinhvien =svs.findStudentByMasv(masv);
        return new ResponseEntity<>(newsinhvien, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Sinhvien> addStudents(@RequestBody Sinhvien sinhvien){
        Sinhvien sinhviens =svs.addStudent(sinhvien);
        return new ResponseEntity<>(sinhviens, HttpStatus.CREATED);
    }
    @PutMapping("/update/{masv}")
    public ResponseEntity<Sinhvien> updateStudents(@PathVariable("masv") Long masv,@RequestBody Sinhvien sinhvien) {
        Optional<Sinhvien> svien = svrepo.findStudentByMasv(masv);
        if(svien.isPresent()){
            Sinhvien updatesv = svien.get();
            updatesv.setHoDem(sinhvien.getHoDem());
            updatesv.setTen(sinhvien.getTen());
            updatesv.setNgaySinh(sinhvien.getNgaySinh());
            updatesv.setGioiTinh(sinhvien.getGioiTinh());
            updatesv.setTinh(sinhvien.getTinh());
            return new ResponseEntity<>(svrepo.save(updatesv), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/delete/{masv}")
    public ResponseEntity<Sinhvien> deleteStudents(@PathVariable("masv") Long masv){
        svs.deleteStudentByMasv(masv);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
