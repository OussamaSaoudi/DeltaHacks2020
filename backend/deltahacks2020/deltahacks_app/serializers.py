from rest_framework import serializers
from deltahacks_app.models import ExampleModel

class ExampleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExampleModel
        fields = ('firstname', 'lastname')