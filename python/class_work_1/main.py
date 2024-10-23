class Dog:
    def __init__(self, local_name, local_age, local_notes, local_something):
        self.name = local_name

        self.age = local_age
        self.notes = local_notes
        self.something = local_something



dog=Dog('testname', '777', 'sth', 'sth else')
dog.name="Testname2"

print(dog)

print(vars(dog))
