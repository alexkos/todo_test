from django.db import models


# Create your models here.
class List(models.Model):
    name = models.CharField(unique=True, max_length=80)
    updated_date = models.DateField(auto_now=True)
    created_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'


class Task(models.Model):
    title     = models.CharField(unique=True, max_length=80)
    finished  = models.BooleanField(default=False)
    task_list = models.ForeignKey(List, related_name='tasks', on_delete=models.CASCADE)
    updated_date = models.DateField(auto_now=True)
    created_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.title}'

