from django.shortcuts import render
from rest_framework import viewsets
from .models import User, TrendyLook, SimilarLook
from .serializers import *

# Create your views here.
class ViewTrends(viewsets.ModelViewSet):
    queryset = TrendyLook.objects.all()
    serializer_class = TrendyLookSerializer

class ViewSimilarLooks(viewsets.ModelViewSet):
    queryset = SimilarLook.objects.all()
    serializer_class = SimilarLookSerializer

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
