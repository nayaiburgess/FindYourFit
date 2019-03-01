from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=20)
    userId = models.AutoField(primary_key=True, null=False)

    def __str__(self):
        self.username

class TrendyLook(models.Model):
    # trendyLookId = models.AutoField(primary_key=True, null=False)
    photo_url = models.CharField(max_length=400, null=True, blank=True)
    celeb_name = models.CharField(max_length=20)
    description = models.CharField(max_length=100)

 

class SimilarLook(models.Model):
    # similarLookId = models.AutoField(primary_key=True, null=False)
    photo_url = models.CharField(max_length=400, null=True, blank=True)
    item_link = models.TextField()
    price = models.CharField(max_length=100)
    trendylooks = models.ForeignKey(TrendyLook, on_delete=models.CASCADE, related_name='similarlooks')


    



    
