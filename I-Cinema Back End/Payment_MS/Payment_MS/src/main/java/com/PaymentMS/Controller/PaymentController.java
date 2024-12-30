package com.PaymentMS.Controller;
import com.PaymentMS.Entity.Payment;
import com.PaymentMS.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payments")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;
    @PostMapping("/pay")
    public ResponseEntity<Payment> processPayment(@RequestParam Long bookingId, @RequestParam Double amount) {

        return ResponseEntity.ok(paymentService.processPayment(bookingId, amount));

    }

}
