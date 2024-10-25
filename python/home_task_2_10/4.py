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

class Race:
    def __init__(self, name, distance_in_km, cars_list):
        self.name = name
        self.distance_in_km = distance_in_km
        self.cars_list = cars_list
        self.racing=True
    def full_race(self):
        while self.racing:
            self.hour_passes()
    def hour_passes(self):
        self.time = 0
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
car1=Car("ABC-123",142)
print(vars(car1)) #print all properties of car1 object

cars=[]
for i in range(1, 10+1):
    #print(i)
    car = Car("ABC-", 142)
    car.maximum_speed=random.randint(100, 200)
    car.registration_number+=str(i)
    #print(vars(car))  # print all properties of car1 object
    cars.append(car)


race1=Race('Grand Demolition Derby', 8000, cars)
race1.print_status()
race1.race_finished()
time.sleep(1)
race1.full_race()
race1.print_status()
race1.race_finished()
