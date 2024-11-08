from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r"personal-info", views.PersonalInfoViewSet)
router.register(r"skills", views.SkillViewSet)
router.register(r"case-studies", views.CaseStudyViewSet)
router.register(r"testimonials", views.TestimonialViewSet)
router.register(r"blog-posts", views.BlogPostViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
