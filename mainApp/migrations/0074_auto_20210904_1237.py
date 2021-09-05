# Generated by Django 3.2.6 on 2021-09-04 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0073_remove_offer_is_favorite'),
    ]

    operations = [
        migrations.AddField(
            model_name='buyerpostrequest',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='buyerpostrequest',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='buyerpostrequest',
            name='postrequest_title',
            field=models.CharField(max_length=220, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='offer',
            name='offer_video',
            field=models.FileField(blank=True, null=True, upload_to='images/'),
        ),
    ]
