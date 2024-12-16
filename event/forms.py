from django import forms
from .models import Comment


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('body',)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Modify existing field attributes
        self.fields['body'].widget.attrs.update({'class': 'form-control',
                                                'placeholder':
                                                    'Enter your comment'})
        self.fields['body'].label = "Comment:"  # Set the label
