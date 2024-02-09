import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import EnrollmentForm from '../../../components/volunteers/EnrollmentForm';

const volunteeringOpportunities = [
  {
    title: 'Beach Cleanup',
    description: 'Help clean the local beach.',
    location: 'Sentosa Beach',
    detailedDescription: 'Join us in making Sentosa Beach beautiful for everyone to enjoy. Volunteers will collect trash and sort recyclables to protect marine life and keep our beach pristine.',
    id: 1,
  },
  {
    title: 'Park Beautification',
    description: 'Plant flowers and clean up the park.',
    location: 'Botanic Gardens',
    detailedDescription: 'Participate in our park beautification project by planting new flowers and helping with general clean-up to create a welcoming space for all visitors.',
    id: 2,
  },
  {
    title: 'Teaching our Kids',
    description: 'Join our KidsREAD club and help encourage a love of reading in our future generation.',
    location: 'National Library Board',
    detailedDescription: 'Volunteers for the KidsREAD club will spend time reading stories to children and leading educational activities to instill a love of reading.',
    id: 3,
  },
  {
    title: 'Helping the Disabled',
    description: 'Help raise funds for our disabled community members.',
    location: 'Singapore Association for the Deaf',
    detailedDescription: 'Support our fundraising efforts to provide better facilities and services for the disabled. Volunteers will organize events and assist in donation drives.',
    id: 4,
  },
  {
    title: 'Helping our Nurses',
    description: 'Help lessen the workload on our nurses.',
    location: 'Singapore General Hospital',
    detailedDescription: 'Assist our healthcare workers by providing administrative support at hospitals and clinics, allowing nurses to focus more on patient care.',
    id: 5,
  },
  {
    title: 'Healthy Living for our Elderly',
    description: 'Help teach our elderly healthy living habits.',
    location: 'Lion Befrienders Service Association',
    detailedDescription: 'Engage with the elderly community through workshops and activities that promote physical health, mental well-being, and social interaction.',
    id: 6,
  },
];


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '600px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

const Opportunities = () => {
  const [detailViewOpportunity, setDetailViewOpportunity] = useState(null);
  const [isEnrollmentModalVisible, setIsEnrollmentModalVisible] = useState(false);

  const handleOpenDetails = (opportunity) => {
    setDetailViewOpportunity(opportunity);
  };

  const handleCloseDetails = () => {
    setDetailViewOpportunity(null);
  };

  const handleOpenEnrollment = () => {
    setIsEnrollmentModalVisible(true);
  };

  const handleCloseEnrollment = () => {
    setIsEnrollmentModalVisible(false);
  };

  const handleFormSubmit = (values) => {
    console.log('Form Values:', values);
    handleCloseEnrollment();
  };

  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2, ml: { sm: '240px' }, mr: 2 }}>
        {volunteeringOpportunities.map((opportunity) => (
          <Grid item xs={12} sm={6} md={4} key={opportunity.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div">
                  {opportunity.title}
                </Typography>
                <Typography variant="body2">
                  {opportunity.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleOpenDetails(opportunity)}>View Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {detailViewOpportunity && (
        <Modal
          open={Boolean(detailViewOpportunity)}
          onClose={handleCloseDetails}
          aria-labelledby="detail-view-title"
          aria-describedby="detail-view-description"
        >
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              onClick={handleCloseDetails}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="detail-view-title" variant="h5" component="div" sx={{ mb: 2 }}>
              {detailViewOpportunity.title}
            </Typography>
            <Typography id="detail-view-description" variant="body1" sx={{ mb: 2 }}>
              {detailViewOpportunity.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Location: {detailViewOpportunity.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {detailViewOpportunity.detailedDescription}
            </Typography>
            <CardActions sx={{ justifyContent: 'center', mt: 2 }}>
              <Button size="small" onClick={handleOpenEnrollment}>Enroll</Button>
            </CardActions>
          </Box>
        </Modal>
      )}

      <Modal
        open={isEnrollmentModalVisible}
        onClose={handleCloseEnrollment}
        aria-labelledby="enrollment-modal-title"
        aria-describedby="enrollment-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="enrollment-modal-title" variant="h6" component="h2">
            Enrollment Form
          </Typography>
          <EnrollmentForm onSubmit={handleFormSubmit} />
        </Box>
      </Modal>
    </>
  );
};

export default Opportunities;