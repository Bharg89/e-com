package com.example.Submission.Service;

import com.example.Submission.Model.LeadDetails;
import com.example.Submission.dto.Request.LeadDetailsRequestDto;

import java.util.List;
import java.util.logging.Level;

public interface LeadDetailsI {
    List<LeadDetails> getAllLeadDetails();

    LeadDetails createLeadDetails(LeadDetailsRequestDto leadDetailsRequestDto);
    LeadDetails getLeadDetails(String id);

    LeadDetails updateLeadDetails(LeadDetailsRequestDto leadDetailsRequestDto, String id);

    String  deleteLeadDetailsByLeadId(String id);


}
