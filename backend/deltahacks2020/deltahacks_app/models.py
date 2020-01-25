from django.db import models

# Create your models here.
class ExampleModel(models.Model):
	word    = models.CharField(max_length=200)
	date = models.DateField('Date', blank=True, null=True)
	positivity = models.IntegeField()
