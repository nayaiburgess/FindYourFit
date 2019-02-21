from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=20)

    def __str__(self):
      return self.username

class TrendyLook(models.Model):
    photo_url = models.TextField()
    celeb_name = models.CharField(max_length=20)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.photo_url

class SimilarLook(models.Model):
    photo_url = models.TextField()
    item_link = models.TextField()
    price = models.CharField(max_length=100)

    def __str__(self):
        return self.photo_url
    
