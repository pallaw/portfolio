import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EmojiEvents, People, Workspace, Code } from '@mui/icons-material';
import { about } from '../data/mock';
import { jetbrainsColors } from '../theme/md3Theme';

const Section = styled(Box)(({ theme }) => ({
  py: { xs: 8, md: 12 },
  background: jetbrainsColors.background.paper,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  fontWeight: 700,
}));

const Divider = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '4px',
  background: jetbrainsColors.gradient.primary,
  margin: '0 auto',
  borderRadius: '2px',
  marginBottom: theme.spacing(6),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '16px',
  background: `${jetbrainsColors.primary}15`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: 32,
    color: jetbrainsColors.primary,
  },
}));

const iconMap = {
  trophy: EmojiEvents,
  users: People,
  award: Workspace,
  code: Code,
};

const About = () => {
  return (
    <Section id="about">
      <Container maxWidth="lg">
        <SectionTitle variant="h2">About Me</SectionTitle>
        <Divider />

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            color: 'text.secondary',
            lineHeight: 1.8,
            maxWidth: '900px',
            margin: '0 auto',
            mb: 8,
            textAlign: 'left',
          }}
        >
          {about.description}
        </Typography>

        <Grid container spacing={3}>
          {about.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <IconWrapper sx={{ margin: '0 auto 16px' }}>
                      <Icon />
                    </IconWrapper>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'white' }}>
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default About;
