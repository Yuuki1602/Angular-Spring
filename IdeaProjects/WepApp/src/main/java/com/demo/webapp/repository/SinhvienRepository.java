package com.demo.webapp.repository;
import com.demo.webapp.entity.Sinhvien;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SinhvienRepository extends JpaRepository<Sinhvien,Long> {

    Optional<Sinhvien> findStudentByMasv(Long masv);

    void deleteById(Long masv);
}
