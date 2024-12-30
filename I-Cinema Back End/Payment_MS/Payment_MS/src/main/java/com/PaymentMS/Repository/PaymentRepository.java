package com.PaymentMS.Repository;

import com.PaymentMS.Entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Long> {
}
