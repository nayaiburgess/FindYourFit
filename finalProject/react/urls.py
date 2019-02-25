from django.urls import path
from .views import ReactAppView

urlpatterns = [
    path('', ReactAppView.as_view())
]

