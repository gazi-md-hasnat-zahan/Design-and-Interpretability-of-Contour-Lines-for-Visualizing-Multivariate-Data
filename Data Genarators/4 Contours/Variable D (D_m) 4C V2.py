import matplotlib
matplotlib.use("agg")
from sklearn.datasets.samples_generator import make_blobs
from sklearn.datasets import make_gaussian_quantiles
from matplotlib import pyplot
from pandas import DataFrame
import numpy as np
from scipy import interpolate

clusternumber = '4';

# for Dm2
pyplot.title("Gaussian divided into three quantiles", fontsize='small')
AX1, AY1 = make_gaussian_quantiles(n_samples=40000,cov=7.5, n_features=2, n_classes=5)
BX1, BY1 = make_gaussian_quantiles(n_samples=40000,cov=7.5, n_features=2, n_classes=4)
CX1, CY1 = make_gaussian_quantiles(n_samples=40000,cov=7.5, n_features=2, n_classes=4)
DX1, DY1 = make_gaussian_quantiles(n_samples=40000,cov=7.5, n_features=2, n_classes=5)

AX2 = np.copy(AX1)
BX2 = np.copy(BX1)
CX2 = np.copy(CX1)
DX2 = np.copy(DX1)

AX2[:,0] = np.interp(AX1[:,0], (np.min(AX1[:,0]), np.max(AX1[:,0])), (-35, 129))
AX2[:,1] = np.interp(AX1[:,1], (np.min(AX1[:,1]), np.max(AX1[:,1])), (-35, 129))

BX2[:,0] = np.interp(BX1[:,0], (np.min(BX1[:,0]), np.max(BX1[:,0])), (-25, 119))
BX2[:,1] = np.interp(BX1[:,1], (np.min(BX1[:,1]), np.max(BX1[:,1])), (69, 234))

CX2[:,0] = np.interp(CX1[:,0], (np.min(CX1[:,0]), np.max(CX1[:,0])), (54, 240))
CX2[:,1] = np.interp(CX1[:,1], (np.min(CX1[:,1]), np.max(CX1[:,1])), (-15, 129))

DX2[:,0] = np.interp(DX1[:,0], (np.min(DX1[:,0]), np.max(DX1[:,0])), (54, 234))
DX2[:,1] = np.interp(DX1[:,1], (np.min(DX1[:,1]), np.max(DX1[:,1])), (69, 229))


AX3 = AX2.reshape(200,200,2)
AY2 = AY1.reshape(200,200)
BX3 = BX2.reshape(200,200,2)
BY2 = BY1.reshape(200,200)
CX3 = CX2.reshape(200,200,2)
CY2 = CY1.reshape(200,200)
DX3 = DX2.reshape(200,200,2)
DY2 = DY1.reshape(200,200)

level00countD = np.zeros((200,200))
level25countD = np.zeros((200,200))
level50countD = np.zeros((200,200))
level75countD = np.zeros((200,200))


for i in range(200):
    for j in range(200):
        xval = int(np.floor(BX3[i][j][0]))
        yval = int(np.floor(BX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        elif BY2[i][j] == 3:
            level00countD[xval][yval] = level00countD[xval][yval] + 1;             
        elif BY2[i][j] == 2:
            level25countD[xval][yval] = level25countD[xval][yval] + 1;
        elif BY2[i][j] == 1:
            level50countD[xval][yval] = level50countD[xval][yval] + 1;
        elif BY2[i][j] == 0:
            level75countD[xval][yval] = level75countD[xval][yval] + 1;

for i in range(200):
    for j in range(200):
        xval = int(np.floor(CX3[i][j][0]))
        yval = int(np.floor(CX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        elif CY2[i][j] == 3:
            level00countD[xval][yval] = level00countD[xval][yval] + 1;             
        elif CY2[i][j] == 2:
            level25countD[xval][yval] = level25countD[xval][yval] + 1;
        elif CY2[i][j] == 1:
            level50countD[xval][yval] = level50countD[xval][yval] + 1;
        elif CY2[i][j] == 0:
            level75countD[xval][yval] = level75countD[xval][yval] + 1;

for i in range(200):
    for j in range(200):
        xval = int(np.floor(AX3[i][j][0]))
        yval = int(np.floor(AX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        if AY2[i][j] == 0:
            level00countD[xval][yval] = level00countD[xval][yval] + 1;
        elif AY2[i][j] == 1:
            level25countD[xval][yval] = level25countD[xval][yval] + 1;
        elif AY2[i][j] == 2:            
            level50countD[xval][yval] = level50countD[xval][yval] + 1;
        elif AY2[i][j] == 3:
            level75countD[xval][yval] = level75countD[xval][yval] + 1;
        elif AY2[i][j] == 4:            
            level00countD[xval][yval] = level00countD[xval][yval] + 1;  
            
for i in range(200):
    for j in range(200):
        xval = int(np.floor(DX3[i][j][0]))
        yval = int(np.floor(DX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        if DY2[i][j] == 0:
            level00countD[xval][yval] = level00countD[xval][yval] + 1;
        elif DY2[i][j] == 1:
            level25countD[xval][yval] = level25countD[xval][yval] + 1;
        elif DY2[i][j] == 2:            
            level50countD[xval][yval] = level50countD[xval][yval] + 1;
        elif DY2[i][j] == 3:
            level75countD[xval][yval] = level75countD[xval][yval] + 1;
        elif DY2[i][j] == 4:            
            level00countD[xval][yval] = level00countD[xval][yval] + 1;  
            
outD = np.zeros((200,200))

for i in range(200):
    for j in range(200):
        if (i < 100 and j < 100) or (i > 100 and j > 100):
            # Dn
            if level25countD[i][j] ==0 and level50countD[i][j] == 0 and level75countD[i][j] == 0:
                continue;
            elif level00countD[i][j] > 0:
                outD[i][j] = 0;
            elif level25countD[i][j] > 0:
                outD[i][j] = 0.25;
            elif level50countD[i][j] > 0:
                outD[i][j] = 0.5;
            elif level75countD[i][j] > 0:
                outD[i][j] = 0.75;                
        else:
            # Dp
            if level25countD[i][j] ==0 and level50countD[i][j] == 0 and level75countD[i][j] == 0:
                continue;
            elif level75countD[i][j] > 0:
                outD[i][j] = 0.75;
            elif level50countD[i][j] > 0:
                outD[i][j] = 0.5;
            elif level25countD[i][j] > 0:
                outD[i][j] = 0.25;
                        
            
outD2= outD.reshape(40000)
dfD = DataFrame(dict(D=outD2))
dfD.to_csv(r'E:\Research\CHI Project\Controlled Experiment\4 variables\Data\Dm23.csv')
