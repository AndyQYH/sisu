# Generated by Django 2.0.5 on 2021-11-15 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enpApi', '0034_auto_20211025_2248'),
    ]

    operations = [
        migrations.AddField(
            model_name='employer',
            name='deadline_duration_days',
            field=models.IntegerField(default=60),
        ),
        migrations.AddField(
            model_name='employer',
            name='mandatory_modules',
            field=models.ManyToManyField(blank=True, null=True, to='enpApi.Modules'),
        ),
    ]
