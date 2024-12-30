package com.PaymentMS.DTOs;

import com.PaymentMS.Entity.PaymentStatus;
import com.PaymentMS.Entity.PaymentType;

public class PaymentDTO {
    private Long id;
    private Long bookingId;
    private Double amount;
    private PaymentStatus paymentStatus;
    private PaymentType paymentType;
}
