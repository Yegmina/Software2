import random
from tabulate import tabulate
import time
class Car:
    def accelerate(self, speed_changer):
        speed_changer=int(speed_changer)
        self.current_speed=self.current_speed+speed_changer
        if self.current_speed<=0:
            self.current_speed=0
            #print(f"speed of the car is 0 so car stopped")
        elif self.current_speed>self.maximum_speed:
            #print(f"speed reached the limit, now it is {self.current_speed}")
            self.current_speed=self.maximum_speed
        else:
            #print(f"now speed is {self.current_speed}")
            pass

        return self.current_speed #to have ability to write speed=accelerate...


    def drive(self, hours):
        self.travelled_distance+=self.current_speed*hours
        #print(f"the new travelled distance is {self.travelled_distance}")
        return self.travelled_distance
    def __init__(self, registration_number, maximum_speed, current_speed=0, travelled_distance=0):
        self.registration_number = registration_number
        self.maximum_speed = maximum_speed
        self.current_speed = current_speed
        self.travelled_distance = travelled_distance

class ElectricCar(Car):
    def __init__(self, registration_number, maximum_speed, battery_capacity, current_speed=0, travelled_distance=0):
        super().__init__(registration_number, maximum_speed)
        self.battery_capacity = battery_capacity




class GasolineCar(Car):
    def __init__(self, registration_number, maximum_speed, tank_volume, current_speed=0, travelled_distance=0):
        super().__init__(registration_number, maximum_speed)
        self.tank_volume = tank_volume
class Race:
    def __init__(self, name, distance_in_km, cars_list):
        self.name = name
        self.distance_in_km = distance_in_km
        self.cars_list = cars_list
        self.racing=True
        self.time = 0

    def full_race(self):

        while self.racing:
            self.hour_passes()
    def hour_passes(self):
        self.racing = True

            # if (next((car for car in cars if car.travelled_distance > 10000), None)) is not None: #wanted to try something fun but it is not working as expected hah
            # break
        for car in self.cars_list:
               car.accelerate(random.randint(-10, 15))
               car.drive(1)
               # print(vars(car))  # print all properties of car object
               if car.travelled_distance > 10000:
                   print(f"car {car.registration_number} win!")
                   self.racing = False
                   break

        self.time += 1

    def print_status(self):
        for car in self.cars_list:
            car_vars = vars(car)
            car_table = [[key, value] for key, value in car_vars.items()]
            print(tabulate(car_table, headers=["Attribute", "Value"], tablefmt="grid"))

    def race_finished(self):
        print(not self.racing)
        return not self.racing


"""main"""
car1=ElectricCar('ABC-15', 180, 52.5)
car2=GasolineCar('ACD-123', 165, 32.3)

car1.current_speed=car2.current_speed=random.randint(100,500)
print(vars(car1)) #print all properties of car1 object
print(vars(car2)) #print all properties of car2 object



car1.drive(3)
car2.drive(3)
print(vars(car1)) #print all properties of car1 object
print(vars(car2)) #print all properties of car2 object