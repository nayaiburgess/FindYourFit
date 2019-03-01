from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=20)
    userId = models.AutoField(primary_key=True, null=False)

class TrendyLook(models.Model):
    photo_url = models.CharField(max_length=400, null=True, blank=True)
    celeb_name = models.CharField(max_length=20)
    description = models.CharField(max_length=100)

class SimilarLook(models.Model):
    photo_url = models.CharField(max_length=400, null=True, blank=True)
    item_link = models.TextField()
    price = models.CharField(max_length=100)
    trendylooks = models.ForeignKey(TrendyLook, null=True, on_delete=models.CASCADE,related_name='similarlooks')


    



    
