from rest_framework import serializers
from .models import User, SimilarLook, TrendyLook 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'userId')

class SimilarLookSerializer(serializers.ModelSerializer):
    class Meta: 
        model = SimilarLook
        fields = ('photo_url', 'item_link', 'price')

class TrendyLookSerializer(serializers.ModelSerializer):
    similarlooks = SimilarLookSerializer(many=True, read_only=True)
    class Meta:
        model = TrendyLook
        fields = ('photo_url', 'celeb_name', 'description', 'similarlooks')

