from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField
from django.utils import timezone

STATUS = ((0, "Draft"), (1, "Published"))


# Create your models here.


class Location(models.Model):
    """
    Stores a location for each blog post
    """

    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="event_posts"
    )
    featured_image = CloudinaryField('image', default='placeholder')
    county = models.ForeignKey(
        Location,
        on_delete=models.PROTECT,
        default=1,
        related_name="event_location"
    )
    article = models.TextField()
    event_start = models.DateField(default=timezone.now)
    event_end = models.DateField(default=timezone.now)
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    excerpt = models.TextField(blank=True)
    updated_on = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-event_start"]

    def __str__(self):
        return f"{self.title} | Last Updated on {self.updated_on}"


class Comment(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name="comments"
    )
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="commenter"
    )
    body = models.TextField()
    approved = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_on"]

    def __str__(self):
        return f"Comment {self.body} | by {self.author}"
