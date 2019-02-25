from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', views.UserView)
router.register('similarlook', views.ViewSimilarLooks)
router.register('trendylook', views.ViewTrends)

urlpatterns = [path("", include(router.urls))]