from django.db import models


class PersonalInfo(models.Model):
    """class contianing meta details for personal info"""

    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    bio = models.TextField()
    photo = models.ImageField(upload_to="profile/")
    years_experience = models.IntegerField()
    revenue_closed = models.DecimalField(max_digits=10, decimal_places=2)
    clients_served = models.IntegerField()


class Skill(models.Model):
    """class containing details for skills"""

    name = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.CharField(max_length=100)


class CaseStudy(models.Model):
    """class containing details for the Case Study model"""

    client_name = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    quote = models.ImageField(upload_to="testimonials/", null=True, blank=True)
    video_url = models.URLField(null=True, blank=True)
