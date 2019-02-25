from rest_framework import serializers
from .models import User, TrendyLook, SimilarLook

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

class TrendyLookSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrendyLook
        fields = ('photo_url', 'celeb_name', 'description')

class SimilarLookSerializer(serializers.ModelSerializer):
    class Meta: 
        model = SimilarLook
        fields = ('photo_url', 'item_link', 'price')