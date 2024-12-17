from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.


class Bio(models.Model):
    """
    Stores information on the site devs
    """
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    profile_image = CloudinaryField('image', default='placeholder')
    git_link = models.URLField(max_length=200)
    linkedin_link = models.URLField(max_length=200)

    class Meta:
        ordering = ["-name"]

    def __str__(self):
        return self.name
