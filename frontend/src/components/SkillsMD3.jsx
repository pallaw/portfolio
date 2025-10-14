import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { skills } from '../data/mock';
import { jetbrainsColors } from '../theme/md3Theme';

const Section = styled(Box)(({ theme }) => ({
  py: { xs: 8, md: 12 },
  background: jetbrainsColors.background.dark,
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

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks & Libraries', items: [...skills.frameworks, ...skills.libraries] },
    { title: 'Architecture & Patterns', items: skills.architecture },
    { title: 'Tools & Practices', items: [...skills.tools, ...skills.practices] },
  ];

  return (
    <Section id="skills">
      <Container maxWidth="lg">
        <SectionTitle variant="h2">Skills & Technologies</SectionTitle>
        <Divider />

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card elevation={0}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
                    {category.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.items.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        variant="filled"
                        sx={{
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: '0.875rem',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Skills;
