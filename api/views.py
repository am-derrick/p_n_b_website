from django.shortcuts import render
from rest_framework import viewsets
from .serializers import (
    PersonalInfoSerializer,
    SkillSerializer,
    CaseStudySerializer,
    TestimonialSerializer,
    BlogPostSerializer,
)
from portfolio.models import PersonalInfo, Skill, CaseStudy, Testimonial
from blog.models import BlogPost


class PersonalInfoViewSet(viewsets.ReadOnlyModelViewSet):
    """Personal info view set class"""

    queryset = PersonalInfo.objects.all()
    serializer_class = PersonalInfoSerializer


class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    """Skills view set class"""

    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class CaseStudyViewSet(viewsets.ReadOnlyModelViewSet):
    """Case study view set class"""

    queryset = CaseStudy.objects.all()
    serializer_class = CaseStudySerializer


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    """Testimonial view set class"""

    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer


class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    """Blog Post view set class"""

    queryset = BlogPost.objects.order_by("-created_at")
    serializer_class = BlogPostSerializer
