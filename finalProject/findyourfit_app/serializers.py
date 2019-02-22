from rest_framework import serializers
from .models import User, TrendyLook , SimilarLook

class UserSerializer(serializers.ModelSeralizer):
    class Meta:
        model = User
        fiels = ('username', 'password')

class TrendyLookSerializer(serializers.ModelSeralizer):
    class Meta:
        model = TrendyLook
        fields = ('photo_url', 'celeb_name', 'description')

class SimilarLookSerializer(serializers.ModelSeralizer):
    class Meta: 
        model = SimilarLook
        fields = ('photo_url', 'item_link', 'price')