from django.contrib import admin
from todolist.models import List, Task


class ListAdmin(admin.ModelAdmin):
    pass

class TaskAdmin(admin.ModelAdmin):
    pass


admin.site.register(List, ListAdmin)
admin.site.register(Task, TaskAdmin)