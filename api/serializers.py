from rest_framework import serializers
from portfolio.models import PersonalInfo, Skill, CaseStudy, Testimonial
from blog.models import BlogPost


class PersonalInfoSerializer(serializers.ModelSerializer):
    """Personal info serializer class"""

    class Meta:
        model = PersonalInfo
        fields = "__all__"


class SkillSerializer(serializers.ModelSerializer):
    """Skill set serializer class"""

    class Meta:
        model = Skill
        fields = "__all__"


class CaseStudySerializer(serializers.ModelSerializer):
    """Case study serializer class"""

    class Meta:
        model = CaseStudy
        fields = "__all__"


class TestimonialSerializer(serializers.ModelSerializer):
    """Testimonial serializer class"""

    class Meta:
        model = Testimonial
        fields = "__all__"


class BlogPostSerializer(serializers.ModelSerializer):
    """Skill set serializer class"""

    class Meta:
        model = BlogPost
        fields = "__all__"
