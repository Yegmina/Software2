class Employee:
    number=0
    def __init__(self, name):
        self.name = name
        Employee.number+=1
        self.employee_number = Employee.number

    def print(self):
        print(self.name, self.employee_number)

class HourlyPaid(Employee):
    def __init__(self, name, salary):
        super().__init__(name)
        self.salary = salary

    def print(self):
        super().print()
        print(self.salary)



employee1 = Employee('John')
hourlypaidemployee2 = HourlyPaid('Mary', 10)
employee1.print()
print("------------")
hourlypaidemployee2.print()
