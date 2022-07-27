package com.demo.webapp.service;

import com.demo.webapp.entity.Sinhvien;
import com.demo.webapp.exception.SinhvienNotFoundException;
import com.demo.webapp.repository.SinhvienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class SinhvienService {
    private final SinhvienRepository svrepo;
    @Autowired
    public SinhvienService(SinhvienRepository svrepo) {
        this.svrepo = svrepo;
    }

    public Sinhvien addStudent(Sinhvien sinhvien){
        return svrepo.save(sinhvien);
    }

    public List<Sinhvien> listAllStudent(){
        return svrepo.findAll();
    }

    public Sinhvien updateStudent(Sinhvien sinhvien){
        return svrepo.save(sinhvien);
    }

    public Sinhvien findStudentByMasv(Long masv){
        return svrepo.findStudentByMasv(masv)
                .orElseThrow(() ->new SinhvienNotFoundException("Student by masv "+masv +" not found!"));
    }

    public void deleteStudentByMasv(Long masv){
        svrepo.deleteById(masv);
    }

}
