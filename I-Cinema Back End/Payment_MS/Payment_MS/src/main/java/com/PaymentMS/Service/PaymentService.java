package com.PaymentMS.Service;

import com.PaymentMS.Entity.Payment;
import com.PaymentMS.Entity.PaymentStatus;
import com.PaymentMS.Repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public Payment processPayment(Long bookingId, Double amount) {

        Payment payment = new Payment();

        payment.setBookingId(bookingId);

        payment.setAmount(amount);

        payment.setPaymentStatus(PaymentStatus.PENDING);



        // Simulate payment processing

//        boolean paymentSuccessful = Math.random() > 0.2; // 80% success rate
        boolean paymentSuccessful = true; // 80% success rate

        payment.setPaymentStatus(paymentSuccessful ? PaymentStatus.SUCCESS : PaymentStatus.FAILED);
        System.out.println(payment.getPaymentStatus());
        return paymentRepository.save(payment);

    }


}
