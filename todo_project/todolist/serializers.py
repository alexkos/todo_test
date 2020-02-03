from rest_framework import serializers

from .models import List, Task


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ['name']


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'finished', 'task_list']