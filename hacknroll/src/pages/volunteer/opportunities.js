import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import EnrollmentForm from '../../components/volunteers/EnrollmentForm';

const volunteeringOpportunities = [
  { title: 'Beach Cleanup', description: 'Help clean the local beach.', id: 1 },
  { title: 'Park Beautification', description: 'Plant flowers and clean up the park.', id: 2 },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Opportunities = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = (values) => {
    console.log('Form Values:', values);
    handleClose(); // Close the modal after form submission
  };

  return (
    <>
    <Grid container spacing={4} sx={{ marginLeft: { sm: '200px' }, marginTop: '20px' }}> {/* Adjust the `sm` value based on your navbar width */}
      {volunteeringOpportunities.map((opportunity) => (
        <Grid item xs={12} sm={6} lg={4} key={opportunity.id} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {opportunity.title}
                </Typography>
                <Typography variant="body2">
                  {opportunity.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={showModal}>Enroll</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={isModalVisible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Modal
              open={isModalVisible}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
              <Box sx={style}>
                <EnrollmentForm onSubmit={handleFormSubmit} />
              </Box>
            </Modal>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enrollment Form
          </Typography>
          <Modal
            open={isModalVisible}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
              <EnrollmentForm onSubmit={handleFormSubmit} />
            </Box>
          </Modal>
        </Box>
      </Modal>
    </>
  );
};

export default Opportunities;
