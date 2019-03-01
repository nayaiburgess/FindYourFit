# Generated by Django 2.1.5 on 2019-03-01 18:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SimilarLook',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo_url', models.CharField(blank=True, max_length=400, null=True)),
                ('item_link', models.TextField()),
                ('price', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='TrendyLook',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo_url', models.CharField(blank=True, max_length=400, null=True)),
                ('celeb_name', models.CharField(max_length=20)),
                ('description', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('username', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=20)),
                ('userId', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.AddField(
            model_name='similarlook',
            name='trendylooks',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='similarlooks', to='findyourfit_app.TrendyLook'),
        ),
    ]
