package com.example.Submission.Service.Impl;

import com.example.Submission.Dao.ILeadDeatilDao;
import com.example.Submission.Model.LeadDetails;
import com.example.Submission.Service.LeadDetailsI;
import com.example.Submission.dto.Request.LeadDetailsRequestDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeadDetailsService implements LeadDetailsI {

    private ILeadDeatilDao leadDeatilDao;


// to get the all lead deatils
    @Override

    public List<LeadDetails> getAllLeadDetails() {
        return leadDeatilDao.getAllLeadDetails();
    }
// to save the lead deatils
    @Override
    public LeadDetails createLeadDetails(LeadDetailsRequestDto leadDetailsRequestDto) {
        LeadDetails leadDetails = ObjectMapperUtils.map(leadDetailsRequestDto, LeadDetails.class);
        return leadDeatilDao.createLeadDetails(leadDetails);
    }
// to get lead id
     @Override
    public LeadDetails getLeadDetails(String id) {
        return leadDeatilDao.getLeadDetails(id);
    }
// to update the lead deatils
    @Override
    public LeadDetails updateLeadDetails(LeadDetailsRequestDto leadDetailsRequestDto, String id) {
        LeadDetails leadDetails = leadDeatilDao.getLeadDetails(id);
        leadDetails.setFirstName(leadDetailsRequestDto.getFirstName());
        leadDetails.setLastName(leadDetailsRequestDto.getLastName());
        leadDetails.setEmailAddress(leadDetailsRequestDto.getEmailAddress());
        leadDetails.setPhone_number(leadDetailsRequestDto.getPhone_number());
        return leadDeatilDao.updateLeadDetails(leadDetails);
    }
// to delete the lead details by id
    @Override
    public String deleteLeadDetailsByLeadId(String id) {
        return leadDeatilDao.deleteLeadDetailsByLeadId(id);
    }
}
