import React from 'react';
import { Box, Typography, Button, Container, Stack, Avatar } from '@mui/material';
import { ArrowForward, Download } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { personalInfo } from '../data/mock';
import { jetbrainsColors } from '../theme/md3Theme';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(180deg, ${jetbrainsColors.background.darker} 0%, ${jetbrainsColors.background.dark} 50%, ${jetbrainsColors.background.darker} 100%)`,
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '600px',
    height: '600px',
    background: `radial-gradient(circle, ${jetbrainsColors.primary}15 0%, transparent 70%)`,
    top: '-200px',
    left: '-100px',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: `radial-gradient(circle, ${jetbrainsColors.secondary}10 0%, transparent 70%)`,
    bottom: '-150px',
    right: '-100px',
    pointerEvents: 'none',
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: jetbrainsColors.gradient.primary,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  display: 'inline-block',
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: { xs: 240, sm: 320, lg: 380 },
  height: { xs: 240, sm: 320, lg: 380 },
  border: `4px solid ${jetbrainsColors.primary}`,
  boxShadow: `0 0 60px ${jetbrainsColors.primary}40`,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="hero">
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, position: 'relative', zIndex: 1 }}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', lg: 'row' }}
          alignItems="center"
          gap={{ xs: 6, lg: 8 }}
        >
          {/* Profile Image - First on mobile */}
          <Box
            flex={{ xs: '0 0 auto', lg: 1 }}
            display="flex"
            justifyContent="center"
            order={{ xs: 1, lg: 2 }}
            sx={{
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <ProfileAvatar
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              sx={{ width: { xs: 240, sm: 320, lg: 380 }, height: { xs: 240, sm: 320, lg: 380 } }}
            />
          </Box>

          {/* Text Content */}
          <Box
            flex={{ xs: '0 0 auto', lg: 1 }}
            order={{ xs: 2, lg: 1 }}
            sx={{
              animation: 'fadeInUp 0.8s ease-out',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Stack spacing={3}>
              <GradientText variant="h6" fontWeight={600}>
                Hello, I'm
              </GradientText>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: 'white',
                }}
              >
                {personalInfo.name}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                {personalInfo.title.split('|')[0].trim()}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  color: 'text.secondary',
                  fontWeight: 500,
                }}
              >
                {personalInfo.subtitle}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  maxWidth: '600px',
                  mt: 2,
                }}
              >
                {personalInfo.bio}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={scrollToContact}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.125rem',
                  }}
                >
                  Get In Touch
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Download />}
                  onClick={() =>
                    window.open(
                      'https://customer-assets.emergentagent.com/job_3c2bde26-baa1-4dd6-a6c3-4b7f71bc0705/artifacts/6a2xfnkv_Pallaw_Pathak_Senior_Android_Resume.pdf',
                      '_blank'
                    )
                  }
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.125rem',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    },
                  }}
                >
                  Download Resume
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Hero;
